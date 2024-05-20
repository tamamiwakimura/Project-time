function hr_min(calculate){
    let hour = calculate*60
    return hour + " min"
}

function second_min(calculate){
    let hour = calculate/60
    return hour + " min"
}

function day_min(calculate){
    let hour = calculate*24*60
    return hour + " min"
}

function mount_min(mount_28,mount_29,mount_30,mount_31){
    let hour = ((mount_28*28)+(mount_29*29)+(mount_30*30)+(mount_31*31))*24*60
    return hour + " min"
}

function cal_hr(){
    let calculate = prompt("กรุณากรอกจำนวนชั่วโมง")    
    document.getElementById("calculate2").innerHTML=hr_min(calculate)
    
}

function cal_second_min(){
    let calculate = prompt("กรุณากรอกจำนวนวินาที")
    document.getElementById("calculate2").innerHTML=second_min(calculate) 
}


function cal_day_min(){
    let calculate = prompt("กรุณากรอกจำนวนวัน")
    document.getElementById("calculate2").innerHTML=day_min(calculate) 
}

function cal_mount(){
    let mount_28 = prompt("กรุณากรอกจำนวนเดือนที่มี28วัน")
    let mount_29 = prompt("กรุณากรอกจำนวนเดือนที่มี29วัน")
    let mount_30 = prompt("กรุณากรอกจำนวนเดือนที่มี30วัน")
    let mount_31 = prompt("กรุณากรอกจำนวนเดือนที่มี31วัน")
    document.getElementById("calculate2").innerHTML=mount_min(mount_28,mount_29,mount_30,mount_31) 

}