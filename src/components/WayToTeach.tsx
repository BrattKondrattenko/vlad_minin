import React, {FC} from 'react';

type WayToTeachProps = {
    title: string,
    description: string
}
const WayToTeach: FC<WayToTeachProps> = ({ title, description}) => {
    return (
            <li>
                <p>
                    <strong>{title}.</strong>{description}
                </p>
            </li>
    )
}

export default WayToTeach;