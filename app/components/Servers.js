import React, { Component } from 'react';
import styles from './Common.css';
import Rooms from './Rooms';

const Server = (onJoin, { serverId, hostUsername, rooms }) => {
  return (
    <div key={serverId} className={styles.serverPanel}>
      <div>
        <h4>Host: { hostUsername }</h4>
        <a onClick={() => onJoin(serverId)}>New room</a>
      </div>
      <div className={styles.roomsListContainer}>
        <h4>Opened Rooms</h4>
        <Rooms rooms={rooms} onJoin={(roomId) => onJoin(serverId, roomId)}/>
      </div>
    </div>
  )
};

class Servers extends Component {

  render() {
    const {
      servers,
      onJoin,
    } = this.props;
    return (
      <div className={styles.serversListContainer}>
        <h2>Available servers</h2>
        <div className={styles.serversList}>
          { servers.map(server => Server(onJoin, server)) }
        </div>
      </div>
    );
  }
}

export default Servers;