import "./tag.css"

export type TagType = "error" | "info" | "alert";

interface TagParams {
    text:string,
    type:string
}

export default function Tag (props: TagParams ) {
    const checkTagType = props.type
    ? "tag--type-" + props.type
    : "tag--type-info"; 
    
    return (
        <div className={`tag_container ${checkTagType}`}>
            {props.text}
        </div>
    );
}
