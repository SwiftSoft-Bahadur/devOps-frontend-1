pipeline {
    agent any
    agent {
        docker {
            image 'node:14' // Use a Node.js image with the desired version
        }
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Angular app source code from version control
                // Example for Git:
                git branch: 'main', url: 'https://github.com/SwiftSoft-Bahadur/devOps-frontend-1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm (if not already installed)
                sh 'npm install -g npm@latest'
                
                // Install Angular CLI globally
                sh 'npm install -g @angular/cli'

                // Install app dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your Angular app
                sh 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                // Run your Angular app's tests
                sh 'ng test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy your Angular app to a web server
                // Replace this with your deployment script or commands
                // Example: Copy the build artifacts to a web server directory
                sh 'scp -r dist/* user@your-server:/path/to/web-server/public'
            }
        }
    }

    post {
        always {
            // Clean up or perform any necessary post-build actions
            cleanWs() // Clean workspace to save disk space
        }

        success {
            // Notify on successful build and deployment
            slackSend(channel: '#general', color: 'good', message: 'Angular app deployed successfully.')
        }

        failure {
            // Notify on build or deployment failure
            slackSend(channel: '#general', color: 'danger', message: 'Build or deployment failed.')
        }
    }
}
