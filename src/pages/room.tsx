import { useParams, Navigate } from 'react-router-dom';

type RoomParams = {
    roomId: string;
}

export function Room() {
    const params = useParams()

    if (!params.roomId) {
        return <Navigate to="/" replace />
    }

    return (
        <div>
            Room Details {JSON.stringify(params)}
        </div>
    )
}