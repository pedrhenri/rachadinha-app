import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../contexts/NavigationContext";
import { Heading } from "@aws-amplify/ui-react";
import Despesas from "./Pages/Despesas";
import Grupos from "./Pages/Grupos";
import Atividades from "./Pages/Atividades";
import Config from "./Pages/Config";

const PageContent = () =>{
    const [currentPage, setCurrentPage] = useState()

    const { 
        currentActivatedButton
    } = useContext(NavigationContext);
    
    useEffect(() => {
        selectPage(currentActivatedButton.name)
    }, [])
      
    useEffect(() => {
        selectPage(currentActivatedButton.name)
    }, [currentActivatedButton])

    const selectPage = (pageName) => {
        switch(pageName){
            case "Despesa":
                setCurrentPage(<Despesas/>)
                break;
            case "Grupo":
                setCurrentPage(<Grupos/>)
                break;
            case "Atividade":
                setCurrentPage(<Atividades/>)
                break;
            case "Config":
                setCurrentPage(<Config/>)
                break;
            default:
                setCurrentPage(<Heading>Erro ao carregar a página.</Heading>)
        }
    }

    return (
        <div className='flex w-full h-full items-center justify-center'>
            {currentPage}
        </div>        
    )
}

export default PageContent