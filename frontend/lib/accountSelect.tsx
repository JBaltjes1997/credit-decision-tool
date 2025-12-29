/* eslint-disable react-hooks/rules-of-hooks */
 
import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Account } from "./types/account";

type Option = {
  key: string;
  value: string;
};

type accountSelectProps = {
  onChange?: (value: string) => void;
};

export function accountSelect({ onChange }: accountSelectProps) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function fetchData() {
      const accounts = await api<Account[]>("/accounts");

      const results: Option[] = accounts.map((account) => ({
        key: account.walletAccount,
        value: `${account.username} (${account.phonenumber})`,
      }));

      setOptions(results);
    }

    fetchData();
  }, []);

  return (
    <select
      className="w-full border rounded px-2 py-1"
      defaultValue=""
      onChange={(e) => {
        if (onChange) {
          onChange(e.currentTarget.value);
        }
      }}
    >
      <option value="" disabled>
        Select an account
      </option>

      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
