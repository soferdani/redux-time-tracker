## Logic

1. Store 
    - in the store ill have one object that look like:
    state = { 
      tasks:[
        {id:number, name: 'task1', time: number(seconds)},  
        {id:number, name: 'task2', time: number(seconds)}
    ],
      taskId: id,
   }
      
2. Actions
    - add task
    - start timer
    - stop timer
    - increasesTime
    
3. reducers 
    1. add new timer (activate from the add action):
        - create new task in the the store with the provided name
    2. start new timer :
        - check if the isRunning flag is true if so end all timers but the one with the current id else set time start and change the isRunning to true
    3. stop time:
        - check the running id -> find it and then   
    4. add second 
    
4. middle 
    1. activate add second reducer 
    