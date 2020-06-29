export class ApplicationConfig {

    public static GET_TASKS_LIST_URL = "assets/json/tasks.json";
    public static TASK_GRID_COLUMNS = ['idx','text', 'start', 'end', 'creator', 'type','isCompleted'];

    public static TASK_TYPE_FILTER = [
      {value: 'all', viewValue: 'All'},
      {value: 'global', viewValue: 'Global'},
      {value: 'personal', viewValue: 'Personal'},
      {value: 'leader', viewValue: 'Leader'}
    ];
}

