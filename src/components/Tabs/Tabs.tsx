import { ReactNode, useState } from "react";

interface Tab {
    id: string;
    label: string | ReactNode;
    callback: () => void;
}

interface TabsProps {
    items: Tab[];
}

export function Tabs({ items }: TabsProps) {
    const [activeTab, setActiveTab] = useState<string>(items[0].id);

    function handleClickOnTab(id: string) {
        setActiveTab(id);
    }

    return (
        <div className="flex items-center justify-between">
            {items.map((item) => (
                <button
                    className={`${activeTab === item.id
                        ? "bg-indigo-300 text-white"
                        : "bg-slate-200 text-slate-500"
                        } flex items-center justify-center w-full h-12`}
                    onClick={() => handleClickOnTab(item.id)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
