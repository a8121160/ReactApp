import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUsers";
import { UserCard } from "../organisms/layout/user/UserCard";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);
  //useEffectで空配列を設定すると初期マウント時一回だけgetusersが実行される

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen }), onOpen();
    },
    [users, onSelectUser, onOpen]
    //依存配列の中身が空だとonSelectUserが実行される、基本的に使う変数は依存配列に入れる
  );
  //propsとして渡す関数は毎回再生成するレンダリング効率が下がるのでuseCallback

  //以下jsx
  // JSX（JavaScript XML）は、JavaScriptでHTMLのような構文を使うための拡張機能
  return (
    <>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        //真ん中にする
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/800 "
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
