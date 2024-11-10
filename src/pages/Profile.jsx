/* function Profile() {
    return (
      <div className="container">
        <h1>Bienvenid@</h1>
        <p>Email: usuario@email.com</p>
        <button className="btn btn-danger">Cerrar sesión</button>
      </div>
    );
  }
  
  export default Profile;
   */

  import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { email, fetchProfile, logout } = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };
    getProfile();
  }, [fetchProfile]);

  return (
    <div className="container">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      {profile && (
        <div>
          <h4>Información del perfil:</h4>
          <p>{JSON.stringify(profile)}</p>
        </div>
      )}
      <button onClick={logout} className="btn btn-secondary mt-3">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;
