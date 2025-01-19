import { Link } from "react-router"


function Card({ character }) {
    return (
        <>
            {
                character && (

                    <div className="bg-white p-8 rounded-xl shadow-md flex flex-row gap-7">
                        <img src={character.image} alt={character.name} className="rounded-xl" />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold">{character.name}</p>
                            <p className="text-gray-500 text-xl">{character.description}</p>
                            <p className="text-gray-500 text-xl">Status: {character.status}</p>
                            <p className="text-gray-500 text-xl">Gender: {character.gender}</p>
                            <p className="text-gray-500 text-xl">Species: {character.species}</p>
                            <p className="text-gray-500 text-xl">Location: {character.location.name}</p>
                        </div>
                    </div>

                )
            }
        </>
    )
}

export default Card