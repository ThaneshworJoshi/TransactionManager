import Header from "../../../../components/molecules/Header/Header.component";
import { selectAuth } from "../../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../../redux/hooks";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectAuth);

  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}

export default CommonLayout
