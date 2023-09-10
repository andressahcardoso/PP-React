import { AddPostComponent, OptionButton, Publication, Stories} from "./Report.jsx";

// Components
import MainHeader from "../MainHeader/MainHeader";
import Nav from "../Nav/Nav";


function Report() {
    return (
        <>
            <MainHeader title='Relatório'/>
            
            <AddPostComponent>
                <OptionButton>
                    <Publication>Hoje</Publication>
                    <Stories>Semana</Stories>
                </OptionButton>

                <p>
                    oie
                </p>
            </AddPostComponent>

            <Nav/>
        </>
    )
}

export default Report;