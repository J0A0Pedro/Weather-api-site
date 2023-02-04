import { useEffect } from "react";

import * as C from "./styles"
export default function Content({ post }: any) {

    useEffect(() => {

    })
    return (

        <C.Box_Container>
            <C.Box_Content>
                <C.Box_Text>{post.location.name} - {post.location.region}</C.Box_Text>
                <C.Box_Title>{post.current.temp_c} °C</C.Box_Title>
                <C.image_content src={post.current.condition.icon} />
                <C.Box_Text>{post.current.condition.text}</C.Box_Text>
            </C.Box_Content>
        </C.Box_Container>
    )
}