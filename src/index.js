export class DatabaseStore {
    constructor(projects, projectLayouts, taskLists, tasks, accountConfig) {
        this.projects = projects;
        this.projectLayouts = projectLayouts;
        this.taskLists = taskLists;
        this.tasks = tasks;
        this.accountConfig = accountConfig;
    }
}

export class ProjectStore {
    constructor(projectName, uid) {
        this.projectName = projectName;
        this.uid = uid;
    }
}

export class ProjectLayoutStore {
    constructor(layouts, project, uid) {
        this.layouts = layouts;
        this.project = project;
        this.uid = uid;
    } 
}

export class TaskListSettingsStore {
    constructor(isCompleteTasksShown, sortBy) {
        this.isCompleteTasksShown = isCompleteTasksShown;
        this.sortBy = sortBy;
    }
}

export class TaskListStore {
    constructor(taskListName, project, uid, taskListId, settings) {
        this.taskListName = taskListName;
        this.project = project;
        this.uid = uid;
        this.taskListId = taskListId;
        this.settings = settings;
    }
}

export class TaskStore {
    constructor(taskName, dueDate, isComplete, project, taskList, uid, dateAdded, isNewTask, isHighPriority) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
        this.project = project;
        this.taskList = taskList;
        this.uid = uid;
        this.dateAdded = dateAdded;
        this.isNewTask = isNewTask;
        this.isHighPriority = isHighPriority;
    }
}

export class AccountStore {
    constructor(uid, favourteProjectId) {
        this.uid = uid;
        this.favourteProjectId = favourteProjectId;
    }
}

export var CssConfigStore = {
    '--primary-color': '',
    '--background-color': '',
    '--surface-color': '',
    '--surface-color-alternate': '',
    '--primary-button-background-image': ''
}