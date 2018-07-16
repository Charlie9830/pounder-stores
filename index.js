'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetFreshLayout = GetFreshLayout;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatabaseStore = exports.DatabaseStore = function DatabaseStore(projects, projectLayouts, taskLists, tasks, accountConfig) {
    _classCallCheck(this, DatabaseStore);

    this.projects = projects;
    this.projectLayouts = projectLayouts;
    this.taskLists = taskLists;
    this.tasks = tasks;
    this.accountConfig = accountConfig;
};

var ProjectStore = exports.ProjectStore = function ProjectStore(projectName, uid, isRemote) {
    _classCallCheck(this, ProjectStore);

    this.projectName = projectName;
    this.uid = uid;
    this.isRemote = isRemote;
};

var RemoteStore = exports.RemoteStore = function RemoteStore(projectName, uid, members, projectLayout, taskLists, tasks) {
    _classCallCheck(this, RemoteStore);

    this.projectName = projectName;
    this.uid = uid;
    this.members = members;
    this.projectLayout = projectLayout;
    this.taskLists = taskLists;
    this.tasks = tasks;
};

var MemberStore = exports.MemberStore = function MemberStore(userId, project, displayName, email, status, role) {
    _classCallCheck(this, MemberStore);

    this.project = project;
    this.userId = userId;
    this.displayName = displayName;
    this.email = email;
    this.status = status;
    this.role = role;
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

var TaskListStore = exports.TaskListStore = function TaskListStore(taskListName, project, uid, taskListId, settings, isFresh) {
    _classCallCheck(this, TaskListStore);

    this.taskListName = taskListName;
    this.project = project;
    this.uid = uid;
    this.taskListId = taskListId;
    this.settings = settings;
    this.isFresh = isFresh;
};

var TaskStore = exports.TaskStore = function TaskStore(taskName, dueDate, isComplete, project, taskList, uid, dateAdded, isNewTask, isHighPriority, metadata, assignedTo) {
    _classCallCheck(this, TaskStore);

    this.taskName = taskName;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
    this.project = project;
    this.taskList = taskList;
    this.uid = uid;
    this.dateAdded = dateAdded;
    this.isNewTask = isNewTask;
    this.isHighPriority = isHighPriority;
    this.metadata = metadata;
    this.assignedTo = assignedTo;
};

var AccountStore = exports.AccountStore = function AccountStore(uid, favourteProjectId) {
    _classCallCheck(this, AccountStore);

    this.uid = uid;
    this.favourteProjectId = favourteProjectId;
};

var DirectoryStore = exports.DirectoryStore = function DirectoryStore(email, displayName, userId) {
    _classCallCheck(this, DirectoryStore);

    this.email = email;
    this.displayName = displayName;
    this.userId = userId;
};

var InviteStore = exports.InviteStore = function InviteStore(projectName, targetUserId, sourceUserId, sourceEmail, sourceDisplayName, projectId, role) {
    _classCallCheck(this, InviteStore);

    this.projectName = projectName;
    this.targetUserId = targetUserId;
    this.sourceUserId = sourceUserId;
    this.sourceEmail = sourceEmail;
    this.sourceDisplayName = sourceDisplayName;
    this.projectId = projectId;
    this.role = role;
};

var TaskMetadataStore = exports.TaskMetadataStore = function TaskMetadataStore(createdBy, createdOn, updatedBy, updatedOn, completedBy) {
    _classCallCheck(this, TaskMetadataStore);

    this.createdBy = createdBy;
    this.createdOn = createdOn;
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
    this.completedBy = completedBy;
};

function GetFreshLayout(taskListWidgetId) {
    return { i: taskListWidgetId, x: 0, y: 0, w: 6, h: 4, isFresh: true };
}

var CssConfigStore = exports.CssConfigStore = {
    '--primary-color': '',
    '--background-color': '',
    '--surface-color': '',
    '--surface-color-alternate': '',
    '--primary-active-text-color': '',
    '--primary-inactive-text-color': '',
    '--primary-hover-color': '',
    '--alternate-active-text-color': '',
    '--alternate-inactive-text-color': '',
    '--loading-spinner-primary-color': '',
    '--loading-spinner-secondary-color': '',
    '--button-background-top-color': '',
    '--button-background-bottom-color': '',
    '--task-checkbox-color': '',
    '--task-text-color': '',
    '--task-selected-color': '',
    '--task-hover-color': '',
    '--task-divider-color': '',
    '--overdue-color': '',
    '--soon-color': '',
    '--later-color': '',
    '--today-color': '',
    '--important-color': '',
    '--due-date-text-color': '',
    '--due-date-circle-color': '',
    '--assignee-background-color': '',
    '--assignee-text-color': '',
    '--task-list-header-text-color': '',
    '--task-list-header-selected-text-color': '',
    '--task-list-header-background-color': '',
    '--task-list-header-background-selected-color': '',
    '--database-synced-color': '',
    '--database-updates-pending-color': ''
};
