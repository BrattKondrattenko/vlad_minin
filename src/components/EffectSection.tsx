import React, {useCallback, useEffect, useState} from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string
        }
        street: string,
        suite: string,
        zipcode: string
    },
    company: {
        bs: string,
        catchPhrase: string,
        name: string
    },
    website: string,
    phone: string,
}

const EffectSection = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await response.json();
      console.log(users)
      setUsers(users);
      setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  const openModal = () => {
    setIsOpenModal(true);
  };
  return (
    <div>
      <h3>Effect</h3>

      <Button style={{marginBottom: '1rem'}} onClick={openModal}>Открыть информацию</Button>
      <Modal open={isOpenModal}>
        <h3>Hello</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          beatae cumque deserunt dolorem doloremque ducimus in laborum
          obcaecati, odio optio porro repudiandae, tempora, temporibus tenetur
          veniam. Aspernatur earum necessitatibus quod.
        </p>
        <Button onClick={() => setIsOpenModal(false)}>Close</Button>
      </Modal>

      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EffectSection;
