import React, { useContext, createContext} from "react";
import { useAddress, useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract, isLoading } = useContract("0x2aacCdB104EC4B22694f28D346C92853b21CA7F2");
    const address = useAddress();
    const connect = useMetamask();

    const submitCampaign = async (form) => {
        try {
            const data = await contract.call("createCampaign" , [
                address, // owner
                form.title,
                form.description,
                form.goal,
                new Date(form.deadline).getTime(),
                form.image 
            ]) // run the create campaign through mutateAsync
            console.log("success", data);
        } catch (error) {
            console.log("failure", error);
        }
    }

    const getCampaigns = async() => {
        const campaigns = await contract.call("getCampaigns");
        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            goal: ethers.utils.formatEther(campaign.goal.toString()),
            deadline: campaign.deadline.toNumber(),
            balance: ethers.utils.formatEther(campaign.balance.toString()),
            image: campaign.image,
            pid: i
        }));

        return parsedCampaigns;
    }

    const getSpecificCampaigns = async() => {
        const allCampaigns = await getCampaigns();
        const specificCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

        return specificCampaigns;
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: submitCampaign,
                getCampaigns,
                getSpecificCampaigns,
                connect,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);