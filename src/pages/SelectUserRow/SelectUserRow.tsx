import React, { Fragment } from 'react';

// React-Router-Dom
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { selectUserRows } from '../../redux/features/user/userSlice';

// Components
import Table from '../../components/HOC/Table';
import Button from '../../components/HOC/Button';

// Module CSS
import buttonClasses from "../../styles/Button.module.css";

// Helpers
import { COLUMNS } from '../../helpers/columns';


const SelectUserRow: React.FC = () => {

  const navigate: any = useNavigate();
  const selectedUsers: any = useSelector<any>(selectUserRows);

  const backToHomePage = () => {
    navigate("/");
  };

  const styles: any = {
    notExistStyle: {
      textAlign: 'center',
      fontSize: '25px',
      color: '#009688',
      fontWeight: 'bold',
      fontStyle: 'oblique',
    },
    title: {
      textAlign: "center",
      fontWeight: 'bold',
    },
    backBtn: {
      marginLeft: "5px",
      marginTop: "10px"
    }
  }

  return (
    <Fragment>

      <div style={styles.backBtn}>
        <Button handleClick={backToHomePage} className={buttonClasses.view_selected}>
          Back to home page
        </Button>
      </div>

      <h2 style={styles.title}>Selected User List</h2>

      {
        selectedUsers && selectedUsers.value && selectedUsers.value.length > 0 ? (
          <Table
            name="selectedUsers"
            column={COLUMNS}
            datas={selectedUsers.value}
          />
        ) : (
          <p style={styles.notExistStyle}>It is not exist any selected user</p>
        )
      }
    </Fragment>
  )
}

export default SelectUserRow;