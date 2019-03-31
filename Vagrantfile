Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  # This is flask's default port
  config.vm.network "forwarded_port", guest: 5000, host: 5000, auto_correct: true
  # This is Postgres's default port
  config.vm.network "forwarded_port", guest: 5432, host: 5432, auto_correct: true

  config.vm.provision :shell, path: "bootstrap/linux-setup.sh"
  config.vm.provision :shell, path: "bootstrap/postgres-setup.sh"
  config.vm.provision :shell, path: "bootstrap/app-setup.sh"
end
