 
 const GIST_AdminID="a2e6d4d7b78c02be3fc4b3156085f99f";
// const Gist_Token="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";
const Admin_filename= "test_gist.json";
 const getAdminData = async () => {
    const req = await fetch(`https://api.github.com/gists/${GIST_AdminID}`);
    const gist = await req.json();
    return JSON.parse(gist.files[Admin_filename].content);
  };



  const GIST_UserID="9491aed9f80c9c12e53e5cc0e265dcdd";
// const Gist_Token="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";
  const User_filename= "User_gist.json";
   const getUserData = async () => {
    const req = await fetch(`https://api.github.com/gists/${GIST_UserID}`);
    const gist = await req.json();
    return (gist.files[User_filename].content)
  };

  export {getAdminData, getUserData}; 


