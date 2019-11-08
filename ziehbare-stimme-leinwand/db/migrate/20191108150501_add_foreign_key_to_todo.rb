class AddForeignKeyToTodo < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :project_id, :int
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
