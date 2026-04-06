import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

export const AccountColumn = ({ account, accountID }) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    console.log(accountID)
    onOpenAccount(accountID);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
};
