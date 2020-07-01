export class ApplicationConfig {

    public static LOGGED_IN_USER_DATA :any = {
        isLeader : false,
        isGlobal :false,
        name : "Nishant Prasad",
    };

    public static GET_TASKS_LIST_URL : string = "assets/json/tasks.json";

    public static TASK_GRID_COLUMNS : any = ['idx','isCompleted','text', 'type', 'creator','start', 'end'];

    public static TASK_TYPE_FILTER : any = [
      {value: 'all', viewValue: 'All'},
      {value: 'global', viewValue: 'Global'},
      {value: 'personal', viewValue: 'Personal'},
      {value: 'leader', viewValue: 'Leader'}
    ];

    public static TASK_ADD_MESSAGE :string = "New task added successfully !";
    public static TASK_MARKED_DONE_MESSAGE :string = "Task marked as completed successfully !";




}

