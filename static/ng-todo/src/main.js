define(function(require){
  var ENTER_KEY = 13
  var angular = require('angularjs')
  var todo = angular.module('TodoApp', [])

  todo.service('todoService', function() {
    var todos = []

    return {
      getTodos: function(filter) {
        if (filter) {
          return todos.filter(function(todo) {
            if (filter.completed === '') return true
            return todo.completed === filter.completed
          })
        } else {
          return todos
        }
      },

      addTodo: function(todo) {
        todos.push({
          title: todo,
          completed: false
        })
      },

      delTodo: function(index) {
        todos.splice(index, 1)
      },

      clearCompleted: function() {
        for (var i = todos.length - 1; i > -1; i--) {
          if (todos[i].completed) {
            this.delTodo(i)
          }
        }
      }
    }
  })

  todo.controller('MainCtrl', function($scope, todoService) {
    $scope.todoService = todoService
    $scope.title = 'todo'
    $scope.todos = todoService.getTodos()
    $scope.newTodo = ''
    $scope.activeFilter = {completed: ''}
    $scope.remaining = 0
    $scope.hidden = false

    $scope.toggleAll = function(e) {
      this.hidden = e.target.checked
    }

    $scope.createOnEnter = function(e) {
        if (e.which !== ENTER_KEY || !this.newTodo.trim()) {
          return
        }

        this.todoService.addTodo(this.newTodo)
        this.newTodo = ''
    }

    $scope.$watch('todos',
      function(){
        var remaining = 0
        $scope.todos.forEach(function(todo) {
          if (!todo.completed) {
            remaining++
          }
        })
        $scope.remaining = remaining
        $scope.completed = $scope.todos.length - remaining
      }, true)

    $scope.filter = function(val) {
      this.activeFilter.completed = val
    }

    $scope.selected= function(val) {
      return val === $scope.activeFilter.completed
    }

    $scope.getTodos = function() {
      return todoService.getTodos(this.activeFilter)
    }

    $scope.edit = function(todo, event) {
      todo.edit = true
      // TODO ?
      setTimeout(function() {
        angular.element(event.target).parent().next()[0].focus()
      }, 0)
    }

    $scope.close = function(todo) {
      todo.edit= false
    }
  })

  angular.bootstrap(document.body, ['TodoApp'])
})
