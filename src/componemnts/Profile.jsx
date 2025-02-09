import { FaGithub } from 'react-icons/fa'
const Profile = ({data})=>{
    let states = [
        {
            id : 'followers',
            count : data.followers ,
            link : `https://github.com/${data.login}?tab=followers`
        },
        {
            id : 'following',
            count : data.following,
            link : `https://github.com/${data.login}?tab=following`
        },
        {
            id : 'repos',
            count : data.public_repos,
            link : `https://github.com/${data.login}?tab=repositories`
    }]
    return(
        <div className="w-[400px] max-w-[90%] bg-black py-2 px-3 rounded-lg overflow-hidden">
            <img className='w-[150px] rounded-full block m-auto p-2 border border-3 border-stone-700' src={data.avatar_url} alt={data.login}></img>
            <h1 className="text-2xl">{data.name}</h1>
            <h3 className="text-stone-500">{data.login}</h3>
            <p>
                {data.bio}
            </p>
            <ul className="flex items-center gap-1 mt-1">
                {states.map(el => {
                    return (
                    <li key={el.id} className="flex items-center gap-1">
                        <span className="font-bold">{el.count}</span>
                        <a href={el.link} className="text-stone-400 font-bold" title={`${el.id} page`}>{el.id}</a>
                    </li>
                    )
                })}
            </ul>
            <a className ='block py-2 px-4 bg-stone-800 rounded text-center mt-1 flex items-center justify-center gap-2' href={`https://github.com/${data.login}`} title={data.login} target="_blank">
                <FaGithub size={20} className='text-white' />
                Visit github profile
            </a>
        </div>
    )
}

export default Profile