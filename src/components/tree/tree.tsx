import { useState } from "react";

interface Node {
    label: string,
    children?: Node[]

}

export function generateNxNTree(/* TODO */...args: any[]): Node[] {
    // TODO: Implement this function
    const result: Node[] = [{

        label: "Node 1",
        children: [
            {
                label: "Node 1.1",
                children: [
                    {
                        label: "Node 1.1.1",
                    },
                    {
                        label: "Node 1.1.2",
                    },
                    {
                        label: "Node 1.1.3",
                    },
                ],
            },
            {
                label: "Node 1.2",
                children: [
                    {
                        label: "Node 1.2.1",
                    },
                    {
                        label: "Node 1.2.2",
                    },
                    {
                        label: "Node 1.2.3",
                    },
                ],
            },
            {
                label: "Node 1.3",
                children: [
                    {
                        label: "Node 1.3.1",
                    },
                    {
                        label: "Node 1.3.2",
                    },
                    {
                        label: "Node 1.3.3",
                    },
                ],
            },
        ],
    }, {
        label: "Node 2",
        children: [
            {
                label: "Node 2.1",
                children: [
                    {
                        label: "Node 2.1.1",
                    },
                    {
                        label: "Node 2.1.2",
                    },
                    {
                        label: "Node 2.1.3",
                    },
                ],
            },
            {
                label: "Node 2.2",
                children: [
                    {
                        label: "Node 2.2.1",
                    },
                    {
                        label: "Node 2.2.2",
                    },
                    {
                        label: "Node 2.2.3",
                    },
                ],
            },
            {
                label: "Node 2.3",
                children: [
                    {
                        label: "Node 2.3.1",
                    },
                    {
                        label: "Node 2.3.2",
                    },
                    {
                        label: "Node 2.3.3",
                    },
                ],
            },
        ],
    },
        {
            label: "Node 3",
            children: [
                {
                    label: "Node 3.1",
                    children: [
                        {
                            label: "Node 3.1.1",
                        },
                        {
                            label: "Node 3.1.2",
                        },
                        {
                            label: "Node 3.1.3",
                        },
                    ],
                },
                {
                    label: "Node 3.2",
                    children: [
                        {
                            label: "Node 3.2.1",
                        },
                        {
                            label: "Node 3.2.2",
                        },
                        {
                            label: "Node 3.2.3",
                        },
                    ],
                },
                {
                    label: "Node 3.3",
                    children: [
                        {
                            label: "Node 3.3.1",
                        },
                        {
                            label: "Node 3.3.2",
                        },
                        {
                            label: "Node 3.3.3",
                        },
                    ],
                },
            ]
        }
    ];
    return result;
}

interface Props {
    node: Node,
}

const TreeNode = ({node}: Props) => {
    const [expanded, setExpanded] = useState(true); //
    const {label, children} = node;

    return (
        <ul className="pl-2 m-[unset] list-disc">
            <li className="pl-2 m-[unset] list-disc cursor-pointer" key={label}
                onClick={() => setExpanded(prev => !prev)}>{label}</li>
            {children && children.length > 0 && expanded && (
                <ul>
                    {children.map((child) => (
                        <TreeNode key={child.label} node={child}/>
                    ))}
                </ul>
            )}
        </ul>
    );
};

interface TreeProps {
    data: Node[]
}

export const Tree = ({data}: TreeProps) => {
    return (
        <div>
            {data.map((node) => (
                <TreeNode key={node.label} node={node}/>
            ))}
        </div>
    );
};