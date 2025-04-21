import {
  Heading,
  IconButton,
  InlineCode,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RiIndeterminateCircleIcon,
  RiInformationIcon,
  Text,
  View,
} from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import { ReactNode } from "react";

export const Reference = ({ children }: { children: ReactNode }) => {
  return (
    <table className="w-full text-left table table-fixed">
      <colgroup>
        <col className="w-3/12" />
        <col className="w-5/12" />
        <col className="w-4/12" />
      </colgroup>

      <thead className="h-10 border-b border-b-outline-dimmest">
        <tr>
          <th>
            <Heading level={2} size="subheadDefault">
              Prop
            </Heading>
          </th>
          <th>
            <Heading level={2} size="subheadDefault">
              Type
            </Heading>
          </th>
          <th>
            <Heading level={2} size="subheadDefault">
              Default
            </Heading>
          </th>
          {/* <th>
            <Heading level={2} size="subheadDefault">
              Description
            </Heading>
          </th> */}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export const ReferenceItem = ({
  prop,
  type,
  description,
  defaultValue,
}: {
  prop: string;
  description: ReactNode;
  type: string;
  defaultValue?: string;
}) => {
  return (
    <tr className="h-10 border-b border-b-outline-dimmest align-middle last:border-b-transparent">
      <td>
        <View className="flex-row gap-1">
          <InlineCode className="whitespace-nowrap">{prop}</InlineCode>
          <Popover>
            <PopoverTrigger asChild>
              <IconButton alt="Info">
                <RiInformationIcon color={tokens.foregroundDimmer} />
              </IconButton>
            </PopoverTrigger>
            <PopoverContent>{description}</PopoverContent>
          </Popover>
        </View>
      </td>
      <td>
        <View className="flex-row gap-1 flex-wrap">
          {type.includes("|") ? (
            type
              .split("|")
              .map((t) => t.trim())
              .map((t) => <InlineCode key={t}>{t}</InlineCode>)
          ) : (
            <InlineCode>{type}</InlineCode>
          )}
        </View>
      </td>
      <td>
        {defaultValue ? (
          <InlineCode>{defaultValue}</InlineCode>
        ) : (
          <RiIndeterminateCircleIcon color={tokens.foregroundDimmer} />
        )}
      </td>
      {/* <td>
        <Text multiline>{description}</Text>
      </td> */}
    </tr>
  );
};
