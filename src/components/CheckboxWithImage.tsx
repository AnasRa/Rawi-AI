import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `solid ${
      checked ? `${rem(3)} #fb4e0f` : `${rem(1)} ${theme.colors.gray[3]}`
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
  },
}));

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
  onCLick: (title: string) => void;
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  onCLick,
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const handleClick = () => {
    onCLick(title);
  };
  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => {
        handleChange(!value);
        handleClick();
      }}
      className={cx(classes.button, className)}
      style={{
        height: "150px",
        width: "150px",
        backgroundImage: image,
        backgroundSize: "contain",
        alignItems: "end",
        direction: "rtl",
      }}
    >
      <Text
        className="text-xl backdrop-blur-sm rounded-md"
        weight={1000}
        sx={{ lineHeight: 1 }}
        style={{
          color: "#05323D",
          // WebkitTextStroke: "0.8px white",
        }}
      >
        {title}
      </Text>
    </UnstyledButton>
  );
}

export function ImageCheckboxes({ data, onChange }: any) {
  const [selections, setSelections] = useState<any>([]);

  const handleSelection = (selection: string) => {
    if (selections.includes(selection)) selections.pop(selection);
    else selections.push(selection);
    onChange(selections);
  };

  const items = data.map((item: any) => (
    <ImageCheckbox
      className="md:h-24 md:w-24 rounded-2xl"
      onCLick={(s: any) => handleSelection(s)}
      {...item}
      key={item.title}
    />
  ));
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}
