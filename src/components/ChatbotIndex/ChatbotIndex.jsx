
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegister from "../user-authentication/UserRegister";

import Step1CompanyDetails from "../OrganizationSetup/Step1CompanyDetails";
import Step2ScrapingStatus from "../OrganizationSetup/Step2ScrapingStatus";
import Step3ViewScrapedData from "../OrganizationSetup/Step3ViewScrapedData";
import Step4TrainingProgress from "../OrganizationSetup/Step4TrainingProgress";




export function ChatbotIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>

                <div className="mt-3">
                    <Routes>
                       
                        <Route path="/" element={<UserRegister />}></Route> 
                      
                        <Route path="/step-1" element={<Step1CompanyDetails />}/> 
                        <Route path="/step-2" element={<Step2ScrapingStatus />}/> 
                        <Route path="/step-3" element={<Step3ViewScrapedData />}/> 
                        <Route path="/step-4" element={<Step4TrainingProgress />}/> 


                    </Routes> 
                </div>

            </BrowserRouter>
        </div> 
    )
}

