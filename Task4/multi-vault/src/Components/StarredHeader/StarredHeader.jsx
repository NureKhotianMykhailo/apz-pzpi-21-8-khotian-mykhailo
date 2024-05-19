import React, {useState, useEffect} from 'react'
import "./StarredHeader.css"
import axios from 'axios'

const StarredHeader = (props) => {

    const fetchUser = async () => {
        try {    
            const response = await axios.get('api/user')
            return response.data.staredAccounts 
        } catch (error) {    
            console.error(error)    
        }    
    }

    function checkIfStared(){
        return (stared != null? stared != undefined ? stared :  []  : []).includes(props.user)
    }
    const [stared, setStared] = useState(null)
    const [isStared, setIsStared] = useState(null)


    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const staredData = await fetchUser()
                setStared(staredData)
                console.log(staredData)

            } catch (error) {
                console.error(error);
            }
        };
        fetchWallet();

    }, []);

    
    useEffect(() => {
        setIsStared(checkIfStared());    
    }, [props.user, stared]);    
    
    console.log(isStared,"Stared", checkIfStared(), "Check")
  

    return (
    <div className='starred-header-container'>
        <div className='starred-container' onClick = {()=>{
            setIsStared(!isStared)
            console.log(isStared)


            axios.put("/api/user", {
                staredAccounts: props.user,
            }).then((responce) => {
                console.log(responce)
            })            
        }}>
            <img class = "star-icon" src={isStared ? "Static/active/star.png" : "Static/inactive/star.png"}></img>
        </div>
    </div>
  )
}

export default StarredHeader