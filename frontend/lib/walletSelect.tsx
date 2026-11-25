/* eslint-disable react-hooks/rules-of-hooks */
 
import { useEffect, useState } from "react";
import { api } from "./api-client";
import { Account } from "./types/account";
import { Wallet } from "./types/wallet";  
import { Key } from "lucide-react";

type Option = {
  key: string;
  value: string;
};

type walletSelectProps = {
  onSelect?: (walletaccount: string) => void;
};

export function walletSelect({ onSelect }: walletSelectProps) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function fetchData() {
      const wallets = await api<Wallet[]>("/wallets"); 
      const results: Option[] = wallets.map((wallet) => ({ 
        key: wallet.walletaccount, 
        value: `${wallet.username} (${wallet.phonenumber})` 
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
        
        if (onSelect) {
          onSelect(e.currentTarget.value);
        }}}>

      <option value="" disabled>
        Select an account
      </option>

      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
