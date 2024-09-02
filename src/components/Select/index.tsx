import * as SelectRadix from '@radix-ui/react-select';
import { Icon } from '../Icon';

type SelectProps = {
    itens: SelectItemsProps[];
    onChange: (...event: any[]) => void;
    message?: string;
};

export interface SelectItemsProps {
    value: 'player' | 'master';
    text: string;
}

export function Select({ itens, onChange, message }: SelectProps) {
    return (
        <div className="w-full relative">
            <SelectRadix.Root onValueChange={onChange}>
                <SelectRadix.Trigger className="flex items-center justify-between py-3 px-4 bg-ghanor-yellow-700 rounded text-ghanor-yellow-100 font-title border text-left outline-none w-full">
                    <SelectRadix.Value placeholder="Qual será seu papel?" />
                    <SelectRadix.Icon>
                        <Icon name="ChevronDown" />
                    </SelectRadix.Icon>
                </SelectRadix.Trigger>

                <SelectRadix.Portal>
                    <SelectRadix.Content className="overflow-hidden">
                        <SelectRadix.ScrollUpButton>
                            <Icon name="ChevronUp" />
                        </SelectRadix.ScrollUpButton>
                        <SelectRadix.Viewport className="py-3 px-4 rounded flex flex-col gap-4 bg-white">
                            {itens.map((item) => (
                                <SelectRadix.Item
                                    value={item.value}
                                    className="flex items-center justify-between h-8 cursor-pointer capitalize outline-none"
                                    key={item.value}
                                >
                                    <SelectRadix.ItemText>
                                        {item.text}
                                    </SelectRadix.ItemText>
                                    <SelectRadix.ItemIndicator>
                                        <Icon name="Check" />
                                    </SelectRadix.ItemIndicator>
                                </SelectRadix.Item>
                            ))}
                        </SelectRadix.Viewport>
                        <SelectRadix.ScrollDownButton />
                        <SelectRadix.Arrow />
                    </SelectRadix.Content>
                </SelectRadix.Portal>
            </SelectRadix.Root>
            <span className="text-[12px] text-ghanor-status-warning absolute -bottom-5 left-0">
                {message}
            </span>
        </div>
    );
}
