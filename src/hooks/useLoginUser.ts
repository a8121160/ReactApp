import { useCallback, useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
  LoginUserProvider,
} from "../providers/LoginUserProvider";

type Props = {
  title: string;
  status: "info" | "warnig" | "success" | "error";
  //パイプラインはor
};

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);

