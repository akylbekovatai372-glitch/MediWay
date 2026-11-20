export type Category = 'Клиника' | 'Больница' | 'Поликлиника' | 'Диагностика' | 'Аптека';
export type Facility = { id:string; name:string; category:Category; district:string; address:string; phone:string; hours:string; description:string; services:string[]; prices:{name:string;price:number}[]; doctors:string[]; status:'Не проверено'; updated:string; lat:number; lng:number; demo:true };
export type Doctor = { id:string; name:string; specialty:string; facility:string; experience:number; price:number; about:string; demo:true };
