import { Button } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick(): void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled = false, isLoading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
