import api from '../../api'
import * as types from '../mutation-types'

const createProjectSlug = project => {
	let slug = project.link.replace('http://' + window.location.hostname, '')
	slug = slug.replace('https://' + window.location.hostname, '')
	project.slug = slug
	return project
}

// initial state
const state = {
	recent: [],
	loaded: false
}

// getters
const getters = {
	recentProjects: state => limit => {
		if (!limit || !Number.isInteger(limit) || typeof limit == 'undefined') {
			return state.recent
		}
    let recent = state.recent
		return recent.slice(0, limit)
	},

	recentProjectsLoaded: state => state.loaded
}

// actions
const actions = {
	getAllProjects({ commit }) {
		api.getProjects(projects => {
			projects.map((project, i) => {
				projects[i] = createProjectSlug(project)
			})

			commit(types.STORE_FETCHED_PROJECTS, { projects })
			commit(types.PROJECTS_LOADED, true)
			commit(types.INCREMENT_LOADING_PROGRESS)
		})
	}
}

// mutations
const mutations = {
	[types.STORE_FETCHED_PROJECTS](state, { projects }) {
		state.recent = projects
	},

	[types.PROJECTS_LOADED](state, val) {
		state.loaded = val
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
