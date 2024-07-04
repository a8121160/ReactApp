/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warnig" | "success" | "error";
  //パイプラインはor
};

export const useMessage = () => {
  const toast = useToast();
  //通知の表示

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
};
