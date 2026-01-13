import { Button } from "antd"

export default function CButton(props:any){
  return(
    <>
      <Button size="large">{props.text}</Button>
    </>
  )
}