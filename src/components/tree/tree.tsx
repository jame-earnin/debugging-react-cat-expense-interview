import { useState } from "react";

interface Node {
    label: string,
    children?: Node[]

}
interface Props {
    node: Node,
}

// generate mega tree with n levels of depth and 10 children per node with label "Node 1.2.3"
export function generateMegaTree(maxDepth: number, depth = 0, label = '1'): Node {
    if (depth === maxDepth) {
        return { label: `Node ${label} (Leaf)` };
    }

    const children = [];
    for (let i = 1; i < 3; i++) {
        children.push(generateMegaTree(maxDepth, depth + 1, `${label}.${i}`));
    }
    return {
        label: `Node ${label}`,
        children,
    };

}
export const bigData = generateMegaTree(10);

const TreeNode = ({ node }: Props) => {
    const [expanded, setExpanded] = useState(true); //
    const { label, children } = node;

    return (
        <ul className="pl-2 m-[unset] list-disc">
            <li className="pl-2 m-[unset] list-disc cursor-pointer" key={label} onClick={() => setExpanded(prev => !prev)}>{label}</li>
            {children && children.length > 0 && expanded && (
                <ul>
                    {children.map((child) => (
                        <TreeNode key={child.label} node={child} />
                    ))}
                </ul>
            )}
        </ul>
    );
};

interface TreeProps {
    data: Node
}
export const Tree = ({ data }: TreeProps) => {
    return <TreeNode node={data} />;
};