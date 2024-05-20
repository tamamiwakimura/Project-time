function min_hr(calculate){
    let hour = calculate/60
    return hour + " hr"
}

function second_hr(calculate){
    let hour = calculate/3600
    return hour + " hr"
}

function day_hr(calculate){
    let hour = calculate*24
    return hour + " hr"
}


function mount_hr(mount_28,mount_29,mount_30,mount_31){
    let hour = ((mount_28*28)+(mount_29*29)+(mount_30*30)+(mount_31*31))*24
    return hour + " hr"
}

function cal_min(){
    let calculate = prompt("กรุณากรอกจำนวนนาที")    
    document.getElementById("calculate").innerHTML=min_hr(calculate)
    
}

function cal_second(){
    let calculate = prompt("กรุณากรอกจำนวนวินาที")
    document.getElementById("calculate").innerHTML=second_hr(calculate) 
}


function cal_day(){
    let calculate = prompt("กรุณากรอกจำนวนวัน")
    document.getElementById("calculate").innerHTML=day_hr(calculate) 
}


function cal_mount(){
    let mount_28 = prompt("กรุณากรอกจำนวนเดือนที่มี28วัน")
    let mount_29 = prompt("กรุณากรอกจำนวนเดือนที่มี29วัน")
    let mount_30 = prompt("กรุณากรอกจำนวนเดือนที่มี30วัน")
    let mount_31 = prompt("กรุณากรอกจำนวนเดือนที่มี31วัน")
    document.getElementById("calculate").innerHTML=mount_hr(mount_28,mount_29,mount_30,mount_31) 

}