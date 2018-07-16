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
    constructor(projectName, uid, isRemote) {
        this.projectName = projectName;
        this.uid = uid;
        this.isRemote = isRemote;
    }
}

export class RemoteStore {
    constructor(projectName, uid, members, projectLayout, taskLists, tasks) {
        this.projectName = projectName;
        this.uid = uid;
        this.members = members;
        this.projectLayout = projectLayout;
        this.taskLists = taskLists;
        this.tasks = tasks;
    }
}

export class MemberStore {
    constructor(userId, project, displayName, email, status, role) {
        this.project = project;
        this.userId = userId;
        this.displayName = displayName;
        this.email = email;
        this.status = status;
        this.role = role;
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
    constructor(taskListName, project, uid, taskListId, settings, isFresh) {
        this.taskListName = taskListName;
        this.project = project;
        this.uid = uid;
        this.taskListId = taskListId;
        this.settings = settings;
        this.isFresh = isFresh;
    }
}

export class TaskStore {
    constructor(taskName, dueDate, isComplete, project, taskList, uid, dateAdded, isNewTask, isHighPriority, metadata, assignedTo) {
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
    }
}

export class AccountStore {
    constructor(uid, favourteProjectId) {
        this.uid = uid;
        this.favourteProjectId = favourteProjectId;
    }
}

export class DirectoryStore {
    constructor(email, displayName, userId)  {
        this.email = email;
        this.displayName = displayName;
        this.userId = userId;
    }
}

export class InviteStore {
    constructor(projectName, targetUserId, sourceUserId, sourceEmail, sourceDisplayName, projectId, role) {
        this.projectName = projectName;
        this.targetUserId = targetUserId;
        this.sourceUserId = sourceUserId;
        this.sourceEmail = sourceEmail;
        this.sourceDisplayName = sourceDisplayName;
        this.projectId = projectId;
        this.role = role;
    }
}

export class TaskMetadataStore {
    constructor(createdBy, createdOn, updatedBy, updatedOn, completedBy) {
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.updatedBy = updatedBy;
        this.updatedOn = updatedOn;
        this.completedBy = completedBy;
    }
}

export function GetFreshLayout(taskListWidgetId) {
    return {i: taskListWidgetId, x: 0, y: 0, w: 6, h: 4, isFresh: true }
}

export var CssConfigStore = {
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
    '--database-updates-pending-color': '',
}