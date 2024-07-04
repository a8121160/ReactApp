import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const { showMessage } = useMessage();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    //findメソッド　条件に一致する最初の要素を返してくれるW
    if (!targetUser) {
      showMessage({ title: "ユーザーが見つかりません", status: "error" });
      return;
    } else {
      setSelectedUser(targetUser ?? null);
      onOpen();
    }

    //??　左辺がnull undifined の場合に右辺を実行する
  }, []);

  return { onSelectUser, selectedUser };
};
