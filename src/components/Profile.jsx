import data from '../user.json'

export const Profile = () => {
    return (
        <div className="profile">
  <div className="description">
    <img
      src={data.avatar}
      alt={data.username}
            className="avatar"
            width={60}
    />
    <p className="name">{data.username}</p>
    <p className="tag">{data.tag}</p>
    <p className="location">{data.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{data.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

