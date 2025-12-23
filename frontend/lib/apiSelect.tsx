/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { api } from "./api-client";
import { Account } from "./types/account";

export function apiSelect() {
  type Option = {
    key: string;
    value: string;
  };
  
  const [options, setOptions] = useState<Option[]>([]);
  useEffect(() => {
    async function fetchData() {
      // Fetch data

      const accounts = await api<Account[]>('/accounts');
      const results: Option[] = accounts.map((account) => ({
        key: account.walletAccount,
        value: `${account.username} (${account.phonenumber})`,
      }));
      setOptions(results);
    }
    // Trigger the fetch
    fetchData();
  }, []);

  return (
    <select className="w-full border rounded px-2 py-1"> 
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
  
}