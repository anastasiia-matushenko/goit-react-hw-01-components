import PropTypes from "prop-types";
import { Friends, Item, Status, Avatar, Paragraph } from "./FriendList.styled"

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendItem key={id}
                        avatar={avatar}
                        friendName={name}
                        isOnline={isOnline}
                    />)
            })}
        </Friends>
    )
};

const FriendItem = ({ avatar, friendName, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Paragraph>{friendName}</Paragraph>
        </Item>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};