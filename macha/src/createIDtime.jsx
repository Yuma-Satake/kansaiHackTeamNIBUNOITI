import { format } from 'date-fns'

const CreateIDtime = ()=>{
  const now = new Date();
  const fix_time = new Date();
  const now_minutes = now.getMinutes();
  const now_hours = now.getHours();

  if(now_minutes>=15 && now_minutes<45){
    fix_time.setMinutes(0);
    fix_time.setHours(now_hours+1);
  }else if(now_minutes<15){
    fix_time.setMinutes(30);
  }else{
    fix_time.setMinutes(30);
    fix_time.setHours(now_hours+1);
  }

  console.log(fix_time)

  const id_name= format(fix_time, 'yyyyMMddHHmm')

  return (
    <div>
      {id_name}
    </div>
  )
}

export default CreateIDtime