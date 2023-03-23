import React from "react";
import { useParams } from 'react-router-dom';

function Edit(){
  const {id} = useParams<{id: string}>();
  return(
    <React.Fragment>
      <h5>User Edit</h5>
    </React.Fragment>
  )

}
export default Edit;