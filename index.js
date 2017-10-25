"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectStore = exports.ProjectStore = function ProjectStore(projectName, uid) {
    _classCallCheck(this, ProjectStore);

    this.projectName = projectName;
    this.uid = uid;
};

var ProjectLayoutStore = exports.ProjectLayoutStore = function ProjectLayoutStore(layouts, project, uid) {
    _classCallCheck(this, ProjectLayoutStore);

    this.layouts = layouts;
    this.project = project;
    this.uid = uid;
};

var TaskListSettingsStore = exports.TaskListSettingsStore = function TaskListSettingsStore(isCompleteTasksShown, sortBy) {
    _classCallCheck(this, TaskListSettingsStore);

    this.isCompleteTasksShown = isCompleteTasksShown;
    this.sortBy = sortBy;
};

var TaskListStore = exports.TaskListStore = function TaskListStore(taskListName, project, uid, taskListId, settings) {
    _classCallCheck(this, TaskListStore);

    this.taskListName = taskListName;
    this.project = project;
    this.uid = uid;
    this.taskListId = taskListId;
    this.settings = settings;
};

var TaskStore = exports.TaskStore = function TaskStore(taskName, dueDate, isComplete, project, taskList, uid, dateAdded, isNewTask) {
    _classCallCheck(this, TaskStore);

    this.taskName = taskName;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.project = project;
    this.taskList = taskList;
    this.uid = uid;
    this.dateAdded = dateAdded;
    this.isNewTask = isNewTask;
};
