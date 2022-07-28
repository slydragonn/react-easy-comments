import useEasyComments from "../../hooks/easy-comments"
import { Params } from "../../types"

interface Props extends Params {
  options: object
}

const CommentsSection = (props:Props) => {
  const { comments} = useEasyComments(props)
}

export default CommentsSection